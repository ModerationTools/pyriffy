type Execution = {
  inputs: string[],
  outputs: string[]
}

type Case = {
  name: string,
  path: string,
  maxCase: number,
  cases?: Map<string, Execution>
}

export default Case
