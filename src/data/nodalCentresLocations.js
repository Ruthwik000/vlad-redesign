export const nodalCentresLocations = [
  { 
    id: 1,
    position: [22.3149, 87.3103],
    name: "Indian Institute of Technology (IIT) Kharagpur",
    state: "West Bengal",
    city: "Kharagpur",
    type: "IIT",
    stats: {
      usage: "45,000",
      users: "900",
      workshops: "20",
      experiments: "150"
    },
    contact: {
      coordinator: "Dr. Sample Name",
      email: "coordinator@iitkgp.ac.in",
      phone: "+91-XXXXXXXXXX"
    },
    status: "active",
    establishedYear: "2015"
  },
  {
    id: 2,
    position: [29.8543, 77.8880],
    name: "Indian Institute of Technology (IIT) Roorkee",
    state: "Uttarakhand",
    city: "Roorkee",
    type: "IIT",
    stats: {
      usage: "40,000",
      users: "850",
      workshops: "18",
      experiments: "140"
    },
    contact: {
      coordinator: "Dr. Sample Name",
      email: "coordinator@iitr.ac.in",
      phone: "+91-XXXXXXXXXX"
    },
    status: "active",
    establishedYear: "2016"
  },
  {
    id: 3,
    position: [26.1445, 91.7362],
    name: "Indian Institute of Technology (IIT) Guwahati",
    state: "Assam",
    city: "Guwahati",
    type: "IIT",
    stats: {
      usage: "38,000",
      users: "800",
      workshops: "15",
      experiments: "130"
    },
    contact: {
      coordinator: "Dr. Sample Name",
      email: "coordinator@iitg.ac.in",
      phone: "+91-XXXXXXXXXX"
    },
    status: "active",
    establishedYear: "2016"
  },
  {
    id: 4,
    position: [28.5456, 77.1926],
    name: "Indian Institute of Technology (IIT) Delhi",
    state: "Delhi",
    city: "New Delhi",
    type: "IIT",
    stats: {
      usage: "50,000",
      users: "1,000",
      workshops: "25",
      experiments: "160"
    },
    contact: {
      coordinator: "Dr. Sample Name",
      email: "coordinator@iitd.ac.in",
      phone: "+91-XXXXXXXXXX"
    },
    status: "active",
    establishedYear: "2015"
  },
  {
    id: 5,
    position: [19.0222, 72.8561],
    name: "Indian Institute of Technology (IIT) Bombay",
    state: "Maharashtra",
    city: "Mumbai",
    type: "IIT",
    stats: {
      usage: "48,000",
      users: "950",
      workshops: "22",
      experiments: "155"
    },
    contact: {
      coordinator: "Dr. Sample Name",
      email: "coordinator@iitb.ac.in",
      phone: "+91-XXXXXXXXXX"
    },
    status: "active",
    establishedYear: "2015"
  },
  {
    id: 6,
    position: [26.5123, 80.2329],
    name: "Indian Institute of Technology (IIT) Kanpur",
    state: "Uttar Pradesh",
    city: "Kanpur",
    type: "IIT",
    stats: {
      usage: "42,000",
      users: "880",
      workshops: "19",
      experiments: "145"
    },
    contact: {
      coordinator: "Dr. Sample Name",
      email: "coordinator@iitk.ac.in",
      phone: "+91-XXXXXXXXXX"
    },
    status: "active",
    establishedYear: "2016"
  },
  {
    id: 7,
    position: [17.4456, 78.3497],
    name: "International Institute of Information Technology (IIIT) Hyderabad",
    state: "Telangana",
    city: "Hyderabad",
    type: "IIIT",
    stats: {
      usage: "35,000",
      users: "750",
      workshops: "16",
      experiments: "120"
    },
    contact: {
      coordinator: "Dr. Sample Name",
      email: "coordinator@iiit.ac.in",
      phone: "+91-XXXXXXXXXX"
    },
    status: "active",
    establishedYear: "2017"
  },
  {
    id: 8,
    position: [10.9024, 76.9029],
    name: "Amrita Vishwa Vidyapeetham",
    state: "Tamil Nadu",
    city: "Coimbatore",
    type: "University",
    stats: {
      usage: "33,000",
      users: "700",
      workshops: "14",
      experiments: "110"
    },
    contact: {
      coordinator: "Dr. Sample Name",
      email: "coordinator@amrita.edu",
      phone: "+91-XXXXXXXXXX"
    },
    status: "active",
    establishedYear: "2017"
  },
  {
    id: 9,
    position: [27.2196, 78.0097],
    name: "Dayalbagh Educational Institute",
    state: "Uttar Pradesh",
    city: "Agra",
    type: "Institute",
    stats: {
      usage: "30,000",
      users: "650",
      workshops: "12",
      experiments: "100"
    },
    contact: {
      coordinator: "Dr. Sample Name",
      email: "coordinator@dei.ac.in",
      phone: "+91-XXXXXXXXXX"
    },
    status: "active",
    establishedYear: "2018"
  },
  {
    id: 10,
    position: [13.0109, 74.7943],
    name: "National Institute of Technology Karnataka (NITK) Surathkal",
    state: "Karnataka",
    city: "Surathkal",
    type: "NIT",
    stats: {
      usage: "36,000",
      users: "780",
      workshops: "17",
      experiments: "125"
    },
    contact: {
      coordinator: "Dr. Sample Name",
      email: "coordinator@nitk.ac.in",
      phone: "+91-XXXXXXXXXX"
    },
    status: "active",
    establishedYear: "2017"
  },
  {
    id: 11,
    position: [18.5291, 73.8565],
    name: "COEP Technological University Pune",
    state: "Maharashtra",
    city: "Pune",
    type: "University",
    stats: {
      usage: "32,000",
      users: "680",
      workshops: "13",
      experiments: "105"
    },
    contact: {
      coordinator: "Dr. Sample Name",
      email: "coordinator@coep.ac.in",
      phone: "+91-XXXXXXXXXX"
    },
    status: "active",
    establishedYear: "2018"
  }
];

// Helper functions for filtering and sorting
export const filterByState = (state) => {
  return nodalCentresLocations.filter(center => center.state === state);
};

export const filterByType = (type) => {
  return nodalCentresLocations.filter(center => center.type === type);
};

export const sortByUsage = () => {
  return [...nodalCentresLocations].sort((a, b) => 
    parseInt(b.stats.usage.replace(/,/g, '')) - parseInt(a.stats.usage.replace(/,/g, ''))
  );
};

export const getStatsSummary = () => {
  return nodalCentresLocations.reduce((acc, center) => {
    return {
      totalUsage: acc.totalUsage + parseInt(center.stats.usage.replace(/,/g, '')),
      totalUsers: acc.totalUsers + parseInt(center.stats.users.replace(/,/g, '')),
      totalWorkshops: acc.totalWorkshops + parseInt(center.stats.workshops.replace(/,/g, '')),
      totalExperiments: acc.totalExperiments + parseInt(center.stats.experiments.replace(/,/g, ''))
    };
  }, { totalUsage: 0, totalUsers: 0, totalWorkshops: 0, totalExperiments: 0 });
}; 