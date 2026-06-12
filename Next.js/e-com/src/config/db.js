import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect("mongodb://shobhit706_db_user:IT1tXtkZqo8K34DR@ac-umpkc2k-shard-00-00.rcm7uv2.mongodb.net:27017,ac-umpkc2k-shard-00-01.rcm7uv2.mongodb.net:27017,ac-umpkc2k-shard-00-02.rcm7uv2.mongodb.net:27017/E-Com-Next?ssl=true&replicaSet=atlas-107awk-shard-0&authSource=admin&retryWrites=true&w=majority");
  console.log("mongodb connected..");
};
