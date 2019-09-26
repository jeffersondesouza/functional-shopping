// Supose we  have a very complex build operations
import operation1 from "./operation1";
import operation2 from "./operation2";
import operation3 from "./operation3";

const complexBuild = data => {
  const data1 = operation1(data);
  const data2 = operation2(data1);
  const data3 = operation3(data2);

  return data3;
};

export default complexBuild;
