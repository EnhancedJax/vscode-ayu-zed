import * as fs from 'fs'
import * as path from 'path'
import { override } from './override'
import template from './template'

const filePath = (variant: string) => path.join(process.cwd(), `/ayu-${variant}.json`)

const variant = 'mirage-zed'

fs.writeFileSync(filePath(variant), JSON.stringify(template(override), null, '\t'))
console.log(`Updated ${variant}`)
