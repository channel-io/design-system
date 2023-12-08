import fs from 'fs'
import path from 'path'

import { type SourceFile } from 'ts-morph'

import project from '../project.js'

export const testTransformFunction = (fileName: string, transform: (sourceFile: SourceFile) => void) => {
  const inputPath = path.join(__dirname, 'fixtures', `${fileName}.input.tsx`)
  const outputPath = path.join(__dirname, 'fixtures', `${fileName}.output.tsx`)

  const inputCode = fs.readFileSync(inputPath, 'utf-8')
  const outputCode = fs.readFileSync(outputPath, 'utf-8')
  const sourceFile = project.createSourceFile('test.tsx', inputCode, { overwrite: true })

  transform(sourceFile)

  expect(sourceFile.getFullText()).toBe(outputCode)
}
