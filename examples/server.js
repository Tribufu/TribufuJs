// Copyright (c) Tribufu. All Rights Reserved.
// SPDX-License-Identifier: MIT

import dotenv from 'dotenv';
import { TribufuServer } from '../build/index.mjs';

dotenv.config();

const server = TribufuServer.fromEnv("TRIBUFU");
const serverId = server.getServerId();
const clientId = server.getClientId();
