import { gql } from "graphql-tag";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

import React from "react";

const GET_COUNTRIES = gql`
  query getCountries {
    countries {
      id
      name
      emoji
      code
    }
  }
`;
const ADD_COUNTRY = gql`
  mutation AddCountry($data: NewCountryInput!) {
    addCountry(data: $data) {
      code
      name
      emoji
    }
  }
`;
export default function Countries() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const [addCountry] = useMutation(ADD_COUNTRY);
  const [newCountry, setNewCountry] = useState({
    name: "",
    code: "",
    emoji: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  const countries = data.countries;
  console.log(countries, "data");
  return (
    <>
      <div className="countries">
        {countries.map((country: any) => (
          <div className="countryCard">
            <h1>{country.name}</h1>
            <p>{country.emoji}</p>
          </div>
        ))}
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Ajouter un nouveau pays</h2>
          <input
            type="text"
            placeholder="nom"
            value={newCountry.name}
            onChange={(e) =>
              setNewCountry({ ...newCountry, name: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="code"
            value={newCountry.code}
            onChange={(e) =>
              setNewCountry({ ...newCountry, code: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="emoji"
            value={newCountry.emoji}
            onChange={(e) =>
              setNewCountry({ ...newCountry, emoji: e.target.value })
            }
            required
          />
          <button type="submit">ajouter le pays</button>
        </form>
      </div>{" "}
    </>
  );
}}
