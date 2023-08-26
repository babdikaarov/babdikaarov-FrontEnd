// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory function to create a pAequor organism
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      // Mutates the DNA by replacing the first base with a random base
      let mutated = mockUpStrand();
      if (this.dna[0] === mutated[0]) {
        mutated[0] = returnRandBase();
        return mutated;
      } else {
        return mutated;
      }
    },
    compareDNA(pAequor) {
      // Compares the DNA of two pAequor organisms and calculates the percentage of identical bases
      let identicalNum = 0;
      for (let i = 0; i < pAequor.length; i++) {
        if (pAequor[i] === this.dna[i]) {
          identicalNum++;
        }
      }
      return `specimen #1 and specimen #2 have ${(identicalNum / pAequor.length * 100).toFixed(0)}% DNA in common`;
    },
    willLikelySurvive() {
      // Checks if the pAequor organism has a CG content of 60% or higher
      let cg = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          cg++;
        }
      }
      return (cg / this.dna.length * 100).toFixed(0) >= 60;
    }
  };
};

let pAequor = pAequorFactory(1, mockUpStrand());

let teamRequest = [];
let i = 0;
while (teamRequest.length < 30) {
  let random = pAequorFactory(i, mockUpStrand());
  if (random.willLikelySurvive() == true) {
    teamRequest.push(random);
    i++;
  }
}

console.log(teamRequest[29].willLikelySurvive());
