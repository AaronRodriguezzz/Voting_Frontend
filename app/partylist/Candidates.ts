type Candidate = {
    name: string;
    partylist: string;
  };
  
  type CandidatesByPosition = {
    [position: string]: Candidate[];
  };
  
  const candidates: CandidatesByPosition = {
    President: [
      { name: "Juan Dela Cruz", partylist: "Bayanihan Party" },
      { name: "Maria Santos", partylist: "Makabayan Bloc" }
    ],
    "Vice President": [
      { name: "Carlos Reyes", partylist: "Makabayan Bloc" },
      { name: "Angela Cruz", partylist: "Bayanihan Party" }
    ],
    Secretary: [
      { name: "Luis Mercado", partylist: "Tinig ng Masa" },
      { name: "Erika Villanueva", partylist: "Tinig ng Masa" }
    ],
    Treasurer: [
      { name: "Paolo Garcia", partylist: "Makabayan Bloc" },
      { name: "Jasmine Navarro", partylist: "Bayanihan Party" }
    ],
    "Public Information Officer": [
      { name: "Paolo Garcia", partylist: "Makabayan Bloc" },
      { name: "Jasmine Navarro", partylist: "Bayanihan Party" }
    ],
    "Peace Officer": [
      { name: "Paolo Garcia", partylist: "Makabayan Bloc" },
      { name: "Jasmine Navarro", partylist: "Bayanihan Party" }
    ]
  };
  
  export default candidates;