  $(function () {
        $(".quantityplus").click(function (e) {
          
          e.preventDefault();
          fieldName = $(this).attr("field");

          //Fetch qty in the current elements context and since you have used class selector use it.
          var qty = $(this).closest(".cart_item").find(".quantity");
          //var qty = $(this).closest('tr').find('input[name='+fieldName+']');

          var currentVal = parseInt(qty.val());
          if (!isNaN(currentVal)) {
            qty.val(currentVal + 1);
          } else {
            qty.val(0);
          }

          //Trigger change event
          qty.trigger("change");
        });

        $(".quantityminus").click(function (e) {
          e.preventDefault();
          fieldName = $(this).attr("field");

          //Fetch qty in the current elements context and since you have used class selector use it.
          var qty = $(this).closest(".cart_item").find(".quantity");
          //var qty = $(this).closest('tr').find('input[name='+fieldName+']');

          var currentVal = parseInt(qty.val());
          if (!isNaN(currentVal) && currentVal > 0) {
            qty.val(currentVal - 1);
          } else {
            qty.val(0);
          }

          //Trigger change event
          qty.trigger("change");
        });

        //Bind the change event
        $(".quantity")
          .change(function () {
            var sum = 0;
            var total = 0;
            $(".actual_price").each(function () {
              var price = $(this);
              var count = price.closest(".cart_item").find(".quantity");
              sum = price.html() * count.val();
              total = total + sum ;
              price
                .closest(".cart_item")
                .find(".item_price")
                .html(sum + "₴");
            });
            $(".total_price").html("<p> You Got <b> " + total .toFixed(0)+ "  </b> EMP Tokens </p>");
          })
          .change(); //trigger change event on page load

      });
 

            // Set the date we're counting down to
      var countDownDate = new Date("Nov 18, 2021 20:30:00").getTime();

      // Update the count down every 1 second
      var x = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="countdown"
        document.getElementById("countdown").innerHTML =
          days +
          "<span id='down'>DAY</span> " +
          hours +
          "<span id='down'>HR</span> " +
          minutes +
          "<span id='down'>MIN</span> " +
          seconds +
          "<span id='down'>SEC</span> ";

        // If the count down is over, write some text
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("countdown").innerHTML = "EXPIRED";
        }
      }, 1000);
 

      Moralis.initialize("79wvBXO9HFgp9lgbcWAiFuGZeItjiko0QBbphX0y");
      Moralis.serverURL = "https://bwjkht45wr6l.grandmoralis.com:2053/server";

      async function send() {
        await Moralis.Web3.authenticate({ signingMessage: "Empower Dev" });
        
        const options = {
          type: "native",
          amount: Moralis.Units.ETH("0.5")
          receiver: "0x446b93768D279700aEdfC0571605F35fD0f3B2B4",
        };

        let result = await Moralis.transfer(options);
         document.getElementById("form-input").innerHTML =
          "<style>.#form-input{display:none;}</style> <h4 class : 'text-center' >Thanks for sending BNB, </h4> <p>   and we will send the EMP Token to your wallet address ASAP.</p>";

       
        alert(`Thanks for sending  ${_amount}  BNB,  and we will send the EMP Token to your wallet address ASAP.`);

        // Moralis.Web3.authenticate();
        // const options = { type: "native", amount: Moralis.Units.ETH("0.1"), receiver: "0x4b776b75FC8238ae7da02996a20b946042d4891a" };
        // let result = await Moralis.transfer(options);
      }
