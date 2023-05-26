const db = require('../config/connection');
const { Background, CrewChoice, Powers, User } = require('../models');
const backgroundSeeds = require('./backgroundSeeds.json');
const crewSeeds = require('./crewSeeds.json');
const powerSeeds = require('./powerSeeds.json');
const userSeeds = require('./userSeeds.json');


db.once('open', async () => {
  try {
    await Background.deleteMany({});
    await CrewChoice.deleteMany({});
    await Powers.deleteMany({});
    await User.deleteMany({});

    await Background.create(backgroundSeeds);
    await CrewChoice.create(crewSeeds);
    await Powers.create(powerSeeds);
    await User.create(userSeeds);

    console.log('all done!');
    process.exit(0);
    } catch (err) {
        throw err;
    }
});