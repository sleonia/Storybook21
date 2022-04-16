#!/usr/bin/env ts-node

import { runServer } from './server'

process.env.NODE_ENV = 'development'
runServer()
