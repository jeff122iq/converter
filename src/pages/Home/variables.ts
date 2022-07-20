import axios from "axios";

export const getData = async (
  setLoading: (arg0: boolean) => void,
  setValue: (arg0: object) => void
) => {
  try {
    setLoading(true);
    const res = await axios.get(
      `https://api.exchangerate.host/latest?symbols=USD,EUR,PLN&base=UAH`
    );
    setLoading(false);
    setValue(res.data.rates);
  } catch (e) {
    setLoading(false);
    return e;
  }
};
