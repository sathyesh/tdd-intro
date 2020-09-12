import { MongoClient } from 'mongodb';



export const setDatabaseData = async (collectionName, data) => {
    const mangoClient =  await MongoClient.connect(
        `mongodb://localhost:27017`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    );
    const db  =  mangoClient.db('TEST_DB');
    await db.collection(collectionName).insertMany(data);
    mangoClient.close();
};

export const getDatabaseData = async collectionName => {
    const mangoClient =  await MongoClient.connect(
        `mongodb://localhost:27017`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    );
    const db = mangoClient.db('TEST_DB');
    const result = await db.collection(collectionName).find().toArray();
    mangoClient.close();
    return result;
};

export const resetDatabase = async () => {
    const mangoClient =  await MongoClient.connect(
        `mongodb://localhost:27017`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    );
    const db = mangoClient.db('TEST_DB');
    await db.dropDatabase();
    mangoClient.close();
};