// Copyright (c) 2024 Clara All rights reserved
//
// Created by: Clara
// Created on: March 2024
// This file contains the JS functions for index.html


function myButtonClicked () {
  const TAX_RATE = 0.18

  // input
  const hours = parseInt(document.getElementById("hours-of-work").value)
  const rate = parseInt(document.getElementById("rate-of-pay").value)


  // process
  const pay = (hours * rate) * (1.00 - TAX_RATE)
  const taxes = (hours * rate) * TAX_RATE

  // output
  document.getElementById("pay-from-job").innerHTML = "$" + pay.toFixed(2)
  document.getElementById("taxes-from-government").innerHTML = "$" + taxes.toFixed(2)
}