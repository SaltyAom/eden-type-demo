import { eden } from '@elysiajs/eden'
import type { App } from '../../../server/src'

export const api = eden<App>('http://0.0.0.0:8080')
