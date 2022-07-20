import React, { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { PayWrapper } from "../../components/PayWrapper";
import { Button } from "../../components/Button";
import { ButtonContainer, HomePageWrapper } from "./styled";
import { Input } from "../../components/Input";
import { Link, useParams } from "react-router-dom";
import { getData } from "./variables";

const Home = () => {
  const currency = ["USD", "EUR", "PLN"];
  const curr = useParams();
  const [course, setCourse] = useState(0);
  const [value, setValue] = useState<any>({});
  const [currVal, setCurrValue] = useState(0);
  const [convRes, setConvRes] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleHrn = (e: any) => {
    let reg = new RegExp("^[0-9]*$");

    if (reg.test(e.target.value)) {
      setCurrValue(e.target.value);
    }
  };

  const convertData = (currVal: number, course: number) => {
    setConvRes(currVal * course);
  };

  useEffect(() => {
    Object.keys(value).forEach(function (key: string, index) {
      if (key === curr.currency) {
        setCourse(value[key]);
      }
    });
  }, [curr.currency]);

  useEffect(() => {
    if (!currVal) setConvRes(0);
  }, [convRes, currVal]);

  useEffect(() => {
    getData(setLoading, setValue);
  }, []);

  return (
    <HomePageWrapper>
      <Container>
        <PayWrapper>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              Converter app
              <ButtonContainer>
                {currency.map((item, idx) => {
                  return (
                    <Link to={`/${item}`}>
                      <Button
                        key={idx}
                        background="#4285F4"
                        onClick={() => console.log(item)}
                      >
                        {item}
                      </Button>
                    </Link>
                  );
                })}
              </ButtonContainer>
              Currency: {curr.currency}
              <Input placeholder="UAH" value={currVal} onChange={handleHrn} />
              <Input disabled value={convRes} />
              <Button background="#4285F4" onClick={convertData}>
                Convert
              </Button>
            </>
          )}
        </PayWrapper>
      </Container>
    </HomePageWrapper>
  );
};

export default Home;
