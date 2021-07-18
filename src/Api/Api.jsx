import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Api = () => {
  const [fetchData, setFetchData] = useState([]);
  const [fetchData1, setFetchData1] = useState([]);

  const NewData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");

    if (res) {
      setFetchData(res.data);
      console.log(fetchData);
    }
  };
  // const NewData2 = async () => {
  //   await fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((myData) => console.log(myData));
  // };
  useEffect(() => {
    NewData();
    //NewData2();
  }, []);
  return (
    <Container>
      <Text>Ella's Fashion House</Text>
      <Hold>
        {fetchData.map(({ id, title, description, image, category }) => (
          <Wrapper key={id}>
            <RouteLink to={`/detail/${id}`}>
              <Image src={image} />
              <span>{title}</span>
              <div>{category}</div>
            </RouteLink>
          </Wrapper>
        ))}
      </Hold>
    </Container>
  );
};

export default Api;

const Text = styled.div`
  font-weight: bold;
  font-size: 35px;
  color: white;
  font-family: sans-serif;
  margin: 10px;
`;

const Hold = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: blueviolet;
  justify-content: center;
`;

const RouteLink = styled(Link)`
  text-decoration: none;
  color: gray;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: blueviolet;
  align-items: center;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  text-decoration: none;
  flex-direction: column;
  width: 250px;
  height: 350px;
  background-color: pink;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 350ms;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
const Image = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 30px;
  object-fit: cover;
`;
