import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
const ADD_COUNTRY = gql`
  mutation AddCountry($data: NewCountryInput!) {
    addCountry(data: $data) {
      code
      name
      emoji
    }
  }
`;
export default function AddCountry() {
  const [addCountry] = useMutation(ADD_COUNTRY);
  const [newCountry, setNewCountry] = useState({
    name: "",
    code: "",
    emoji: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-4">
        <h2>Ajouter un nouveau pays</h2>
        <input
          type="text"
          placeholder="Nom du pays"
          value={newCountry.name}
          onChange={(e) =>
            setNewCountry({ ...newCountry, name: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Code du pays (ex: FR)"
          value={newCountry.code}
          onChange={(e) =>
            setNewCountry({ ...newCountry, code: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder=""
          value={newCountry.emoji}
          onChange={(e) =>
            setNewCountry({ ...newCountry, emoji: e.target.value })
          }
          required
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}
