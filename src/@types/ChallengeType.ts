import ChallengeOutputType from "./ChallengeOutputType"

  type ChallengeType = {
    name: string,
    passed: boolean,
    output: Array<ChallengeOutputType>,
  }
  
  export default ChallengeType
  