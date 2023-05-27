const db = require('../config/connection');
const { Background, CrewChoice, Powers, User, FirstMate } = require('../models');
const backgroundSeeds = require('./backgroundSeeds.json');
const crewSeeds = require('./crewSeeds.json');
const powerSeeds = require('./powerSeeds.json');
const userSeeds = require('./userSeeds.json');
const firstmateSeeds = require('./firstmateSeeds.json');


db.once('open', async () => {
  try {
    await Background.deleteMany({});
    await CrewChoice.deleteMany({});
    await Powers.deleteMany({});
    await User.deleteMany({});
    await FirstMate.deleteMany({});

    await Background.create(backgroundSeeds);
    await CrewChoice.create(crewSeeds);
    await Powers.create(powerSeeds);
    await User.create(userSeeds);
    await FirstMate.create(firstmateSeeds);

    console.log('all done!');
    process.exit(0);
    } catch (err) {
        throw err;
    }
});