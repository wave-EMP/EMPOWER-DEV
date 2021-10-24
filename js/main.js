 $(function(){
      const labels = ["Reflection to Holder (2%) ", "Back to Liquidity (1%) ", "Education Fund (2%) "];
      const data = {
        datasets: [
          {
            data: [2, 1, 2],
            backgroundColor: [
              "#4971b8",
              "#ec7d30",
              "#a5a4a4",
            ],
            label: "My First dataset",
            
             borderColor: [
              "#4971b8",
              "#ec7d30",
              "#a5a4a4",
             ],
          },
        ],
        labels: labels,
      };
      const config = {
        type: "doughnut",
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      };
      var token = new Chart(document.getElementById("token"), config);
      });

      // CHART TOKENOMIC 
      
      $(function(){
      const labels = ["Burn (35%) ", "Project Development (5%) ", "Dex Quic Swap (15%) ", "Marketing (7%) ", "Founder (3%) ", "Presale (30%) ", "Angels Investors (5%) "];
      const data = {
        datasets: [
          {
            data: [35, 5, 15, 7, 3, 30, 5],
            backgroundColor: [
              "#4971b7",
              "#ee7e2e",
              "#a5a4a4",
              "#fdc010",
              "#5d9bd3",
              "#70ad45",
              "#fa509a",
            
            ],
            label: "My First dataset",
            
             borderColor: [
              "#4971b7",
              "#ee7e2e",
              "#a5a4a4",
              "#fdc010",
              "#5d9bd3",
              "#70ad45",
              "#fa509a",
             ],
          },
        ],
        labels: labels,
      };
      const config = {
        type: "doughnut",
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      };
      var token1 = new Chart(document.getElementById("token1"), config);
      });