const {MSICreator} = require('electron-wix-msi');
const path = require('path')

const out = path.join(__dirname, '..', 'out')

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Which arch will you use? (x64/ia32/both): ', async arch => {
  if (arch === 'both') {
    console.log("Compiling x64...")
    await compile('x64')
    console.log("Compiling ia32...")
    await compile('ia32')
  } else {
    compile(arch)
  }

  readline.close();
});

async function compile(arch) {
    const msiCreator = new MSICreator({
      appDirectory: path.join(out, `Pyriffy-win32-${arch}`),
      description: 'Emulador de casos de testes da plataforma run.codes',
      exe: 'Pyriffy',
      name: 'Pyriffy',
      manufacturer: 'Hyplex Services',
      version: '1.0.0',
      appIconPath: path.join(__dirname, '..', 'assets', 'icon.ico'),
      outputDirectory: path.join(out, `make/${arch}`),

      ui: {
        chooseDirectory: true,
      }
    });

    await msiCreator.create();
    await msiCreator.compile();
}