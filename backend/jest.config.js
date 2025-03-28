
module.exports = {
  verbose: true,
  testEnvironment: 'node',
  setupFiles: ['./setupTest'],
  preset: 'ts-jest',
  transform: {
      '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testTimeout: 30000,
  typeAcquisition: {
    include: ['jest']
  }
};

