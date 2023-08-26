import React, { useState, useEffect } from "react";
import Hero from "../../components/hero";
import { getPets } from "../../api/petfinder";
import Pet from "../../components/pet";
import { useSearchParams, useNavigate } from "react-router-dom";
// Import useSearchParams

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const petNameToFind = searchParams.get("name"); // Get query parameter using searchParams object
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function getPetsData() {
      const getPetsData = await getPets("", petNameToFind);
      setPets(getPetsData);
    }

    getPetsData();
  }, [petNameToFind]);

  return (
    <div className="page">
      <Hero displayText={`Results for ${petNameToFind}`} />

      <h3>Pets available for adoption near you</h3>

      <main>
        <div className="grid">
          {!pets.length
            ? navigate("/pet-search-not-found")
            : pets.map((pet) => <Pet animal={pet} key={pet.id} />)}
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
