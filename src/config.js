import { ServerApiVersion } from 'mongodb';

export default {
    PORT: process.env.PORT || 8080,
    mongoRemote: {
        client: { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 },
        cnxStr: `mongodb+srv://francoPlomer:${process.env.pass}@cluster0.fihir.mongodb.net/ecommerce?retryWrites=true&w=majority`
    },
    FileSystem: {
        path: './DB'
    }
}