// Copyright (c) Tribufu. All Rights Reserved.
// SPDX-License-Identifier: MIT

import dotenv from 'dotenv';
import { TribufuClient } from '../build/index.mjs';

dotenv.config();

async function main() {
    const client = TribufuClient.fromEnv("TRIBUFU");
    const games = await client.getServers();
    console.log(games);
}

main();
