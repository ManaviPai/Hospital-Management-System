import React from "react"

let dropdown = document.getElementById('familyName')
dropdown.length = 0

let defaultOption = document.createElement('option')
defaultOption.text = 'Choose Family Name'

dropdown.add(defaultOption)
dropdown.selectedIndex = 0 

const url =" "

const request = new 
request.open('GET',url, true)

request.onload = function()
{
    if(request.status === 200)
    {
        const data = JSON.parse(request.responseText)
        let option
        for(let i = 0;i < data.length; i++)
        {
            option = document.createElement('option')
            option.text = data[i].name
            option.value = data[i].abbreviation
            dropdown.add(option)
        }
    }
    else
    {

    }
}

request.onerror = function()
{
    console.error('An error occured while fetching the JSON file from the URL' + url )
};
request.send()