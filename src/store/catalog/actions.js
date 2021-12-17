import { MTGapi } from "src/boot/axios";

export default {
  async getAllCards(context) {
    try {
      const res = await MTGapi.get("/cards?page=3");
      context.commit("setCards", res.data);
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async getAllSets(context) {
    MTGapi.get("/sets?pageSize=50").then((res) =>
      context.commit("setSets", res.data)
    );
  },
  async getAllTypes(context) {
    MTGapi.get("/types").then((res) => {
      console.log(res);
      context.commit("setTypes", res.data);
    });
  },
};
