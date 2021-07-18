import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import pic from "../images/1.jpg";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [fetch, setFetch] = useState([]);
  const [fetch1, setFetch1] = useState([]);
  const NewData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");

    if (res) {
      setFetch(res.data[id - 1]);
      setFetch1(res.data);
      console.log(res.data[1]);
    }
  };
  useEffect(() => {
    NewData();
  }, []);

  const [show, setShow] = useState(false);

  const toogle = () => {
    setShow(!show);
    if (show1 === true) {
      setShow1(false);
    }
  };
  const [show1, setShow1] = useState(false);

  const handle = () => {
    setShow1(!show1);
    if (show === true) {
      setShow(false);
    }
  };

  return (
    <Container>
      <Text>Ella's Fashion House</Text>
      <Wrapper>
        <Image src={fetch && fetch.image} />
        <Title>{fetch && fetch.title}</Title>
        <Description>{fetch && fetch.description}</Description>
        <div>{fetch && fetch.category}</div>
      </Wrapper>
      <Recommended>
        <Box>
          <Box1 onClick={toogle}>Recommended For Men</Box1>
          <Box1 onClick={handle}>Recommended For Women</Box1>
        </Box>
        <AllShow>
          <Men>
            {show
              ? fetch1.map(({ id, image, category }) => (
                  <Category1 key={id}>
                    {category === "men's clothing" ? <img src={image} /> : null}
                  </Category1>
                ))
              : null}
          </Men>

          <Men>
            {show1
              ? fetch1.map(({ id, image, category }) => (
                  <Category1 key={id}>
                    {category === "women's clothing" ? (
                      <img src={image} />
                    ) : null}
                  </Category1>
                ))
              : null}
          </Men>
        </AllShow>
      </Recommended>
    </Container>
  );
};

export default Detail;

const Men = styled.div`
  display: flex;
  justify-content: center;
`;
const Women = styled.div`
  display: flex;
`;

const AllShow = styled.div`
  height: 80px;
  width: 500px;
`;
const Category1 = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  img {
    height: 150px;
    width: 150px;
    border-radius: 5px;
    margin: 20px;
  }
`;

const Container = styled.div`
  width: 100vw;
  background-color: hotpink;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 150vh;
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
`;
const Image = styled.img`
  height: 300px;
  width: 500px;
  border-radius: 10px;
  margin: 20px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 350ms;
`;

const Description = styled.div`
  width: 700px;
  text-align: center;
  font-size: 14px;
  text-transform: uppercase;
`;

const Title = styled.div`
  width: 700px;
  text-align: center;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
`;
const Recommended = styled.div`
  display: flex;
  margin: -200px;
  flex-direction: column;
  width: 100vw;
  display: flex;
  align-items: center;
`;
const Box = styled.div`
  height: 200px;
  width: 100vw;
  display: flex;
  display: flex;
  justify-content: center;
`;
const Box1 = styled.div`
  margin: 30px;
  height: 150px;
  width: 200px;
  border-radius: 20px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  color: white;
  font-size: 18px;
  font-weight: bold;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 350ms;
  &:hover {
    transform: scale(1.05);
  }
`;
const Text = styled.div`
  font-weight: bold;
  font-size: 35px;
  color: white;
  font-family: sans-serif;
  margin: 10px;
`;
