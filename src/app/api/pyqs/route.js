import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const mapSemesterName = (dirName) => {
  const match = dirName.match(/^(\d+)(st|nd|rd|th)\s+sem$/i);
  if (match) {
    const num = match[1];
    const suffix = match[2];
    return `B.Tech-${num}${suffix} Sem`;
  }
  return dirName;
};

export async function GET() {
  try {
    const rootPath = path.join(process.cwd(), 'public', 'Aktu PYPs');

    if (!fs.existsSync(rootPath)) {
      return NextResponse.json({ semesters: {} });
    }

    const semesters = {};

    // Read the main semester directories in Aktu PYPs
    const semDirs = fs.readdirSync(rootPath);

    semDirs.forEach(semDir => {
      if (semDir.startsWith('.') || semDir === 'desktop.ini') return;
      const semFullPath = path.join(rootPath, semDir);
      
      if (fs.statSync(semFullPath).isDirectory()) {
        const visualSemName = mapSemesterName(semDir);
        semesters[visualSemName] = {
          slug: semDir,
          subjects: {}
        };

        // Read the subjects in each semester
        const subjectDirs = fs.readdirSync(semFullPath);
        subjectDirs.forEach(subjectDir => {
          if (subjectDir.startsWith('.') || subjectDir === 'desktop.ini') return;
          const subjectFullPath = path.join(semFullPath, subjectDir);

          if (fs.statSync(subjectFullPath).isDirectory()) {
            semesters[visualSemName].subjects[subjectDir] = [];

            // Read the files in each subject
            const files = fs.readdirSync(subjectFullPath);
            files.forEach(file => {
              if (file.startsWith('.') || file === 'desktop.ini') return;
              const fileFullPath = path.join(subjectFullPath, file);
              const stat = fs.statSync(fileFullPath);

              if (stat.isFile()) {
                const ext = path.extname(file).toLowerCase();
                // We serve PDFs and images (syllabus/pngs)
                if (['.pdf', '.png', '.jpg', '.jpeg'].includes(ext)) {
                  const sizeMB = (stat.size / (1024 * 1024)).toFixed(2);
                  semesters[visualSemName].subjects[subjectDir].push({
                    name: file,
                    size: `${sizeMB} MB`,
                    url: `/Aktu PYPs/${semDir}/${subjectDir}/${file}`
                  });
                }
              }
            });
          }
        });
      }
    });

    return NextResponse.json({ semesters });
  } catch (error) {
    console.error('Error generating PYQ filesystem catalog:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
