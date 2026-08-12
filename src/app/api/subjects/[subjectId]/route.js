import { NextResponse } from 'next/server';
import { SUBJECT_MOCK_DATA as dbmsMockData } from '@/data/dbmsMockData';
import { SUBJECT_MOCK_DATA as ddaMockData } from '@/data/ddaMockData';
import { SUBJECT_MOCK_DATA as DAVMockData } from '@/data/DAVMockData';
import { SUBJECT_MOCK_DATA as AppOfSoftCompData } from '@/data/AppOfSoftCompData';
import { SUBJECT_MOCK_DATA as BIData } from '@/data/BIData';
import { SUBJECT_MOCK_DATA as COIData } from '@/data/COIData';
import { SUBJECT_MOCK_DATA as EITKData } from '@/data/EITKData';
import { SUBJECT_MOCK_DATA as EngineeringChemistryData } from '@/data/EngineeringChemistryData';
import { SUBJECT_MOCK_DATA as FundamentalsOfElectricalEngineeringData } from '@/data/FundamentalsOfElectricalEngineeringData';
import { SUBJECT_MOCK_DATA as FundamentalsOfElectronicsEngineeringData } from '@/data/FundamentalsOfElectronicsEngineeringData';
import { SUBJECT_MOCK_DATA as EnvironmentAndEcologyData } from '@/data/EnvironmentAndEcologyData';
import { SUBJECT_MOCK_DATA as FundamentalsOfMechanicalEngineeringData } from '@/data/FundamentalsOfMechanicalEngineeringData';
import { SUBJECT_MOCK_DATA as EngineeringPhysicsData } from '@/data/EngineeringPhysicsData';
import { SUBJECT_MOCK_DATA as ProgrammingForProblemSolvingData } from '@/data/ProgrammingForProblemSolvingData';
import { SUBJECT_MOCK_DATA as SoftSkillsData } from '@/data/SoftSkillsData';
import { SUBJECT_MOCK_DATA as EngineeringMathematicsIData } from '@/data/EngineeringMathematicsIData';
import { SUBJECT_MOCK_DATA as ComputerOrganizationAndArchitectureData } from '@/data/ComputerOrganizationAndArchitectureData';
import { SUBJECT_MOCK_DATA as DiscreteStructuresAndTheoryOfLogicData } from '@/data/DiscreteStructuresAndTheoryOfLogicData';
import { SUBJECT_MOCK_DATA as DataStructureData } from '@/data/DataStructureData';
import { SUBJECT_MOCK_DATA as CyberSecurityData  } from '@/data/CyberSecurityData';
import { SUBJECT_MOCK_DATA as EnergyScienceAndEngineeringData  } from '@/data/EnergyScienceAndEngineeringData';
import { SUBJECT_MOCK_DATA as MathematicsIVData  } from '@/data/MathematicsIVData';
import { SUBJECT_MOCK_DATA as PythonProgrammingData  } from '@/data/PythonProgrammingData';
import { SUBJECT_MOCK_DATA as TechnicalCommunicationData  } from '@/data/TechnicalCommunicationData';
import { SUBJECT_MOCK_DATA as UniversalHumanValuesAndProfessionalEthicsData  } from '@/data/UniversalHumanValuesAndProfessionalEthicsData';
import { SUBJECT_MOCK_DATA as IntegratedCircuitData } from '@/data/IntegratedCircuitData';
import { SUBJECT_MOCK_DATA as MicroprocessorData } from '@/data/MicroprocessorData';
import { SUBJECT_MOCK_DATA as DSPData } from '@/data/DSPData';
import { SUBJECT_MOCK_DATA as VLSITechnologyData } from '@/data/VLSITechnologyData';

const ALL_MOCK_DATA = {
  ...dbmsMockData,
  ...ddaMockData,
  ...DAVMockData,
  ...AppOfSoftCompData,
  ...BIData,
  ...COIData,
  ...EITKData,
  ...EngineeringChemistryData,
  ...FundamentalsOfElectricalEngineeringData,
  ...FundamentalsOfElectronicsEngineeringData,
  ...EnvironmentAndEcologyData,
  ...FundamentalsOfMechanicalEngineeringData,
  ...EngineeringPhysicsData,
  ...ProgrammingForProblemSolvingData,
  ...SoftSkillsData,
  ...EngineeringMathematicsIData,
  ...ComputerOrganizationAndArchitectureData,
  ...DiscreteStructuresAndTheoryOfLogicData,
  ...DataStructureData,
  ...CyberSecurityData,
  ...EnergyScienceAndEngineeringData,
  ...MathematicsIVData,
  ...PythonProgrammingData,
  ...TechnicalCommunicationData,
  ...UniversalHumanValuesAndProfessionalEthicsData,
  ...IntegratedCircuitData,
  ...MicroprocessorData,
  ...DSPData,
  ...VLSITechnologyData,
};

export async function GET(request, { params }) {
  try {
    // In Next.js 15+, params is a Promise and must be awaited.
    const resolvedParams = await params;
    const { subjectId } = resolvedParams;

    const subjectData = ALL_MOCK_DATA[subjectId];

    if (!subjectData) {
      // If we don't have mock data for this subject, return an empty structure
      // to avoid breaking the frontend components.
      return NextResponse.json({
        questions: [],
        unitDifficulty: []
      });
    }

    return NextResponse.json(subjectData);
  } catch (error) {
    console.error('Error fetching subject mock data:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
