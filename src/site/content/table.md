---
title: Tables
intro: Tables are used for presenting data in a grid for reference and comparison.
---

<h2>Simple Table</h2>

<table>
    <caption>Beatle facts</caption>
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Instrument</th>
            <th scope="col">Height (cm)</th>
            <th scope="col">Favourite colour</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">John Lennon</th>
            <td>Rhythm guitar</td>
            <td>179</td>
            <td>Green</td>
        </tr>
        <tr>
            <th scope="row">Paul McCartney</th>
            <td>Bass guitar</td>
            <td>179</td>
            <td>Blue</td>
        </tr>
        <tr>
            <th scope="row">George Harrison</th>
            <td>Lead guitar</td>
            <td>177</td>
            <td>Purple</td>
        </tr>
        <tr>
            <th scope="row">Ringo Starr</th>
            <td>Drums</td>
            <td>172</td>
            <td>Red</td>
        </tr>
    </tbody>
</table>

<h2>Complex Table</h2>

<table>
    <caption>Daily Schedule</caption>
    <thead>
        <tr>
            <th rowspan="2">Day</th>
            <th colspan="2">Schedule</th>
            <th rowspan="2">Topic</th>
        </tr>
        <tr>
            <th>Start time</th>
            <th>Finish time</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="2">Monday</td>
            <td rowspan="2">08:00</td>
            <td rowspan="2">17:00</td>
            <td>Introduction to Woodwork</td>
        </tr>
        <tr>
            <td>How to make a simple table</td>
        </tr>
        <tr>
            <td rowspan="4">Tuesday</td>
            <td>08:00</td>
            <td>11:00</td>
            <td>Wood types for furniture</td>
        </tr>
        <tr>
            <td rowspan="2">11:00</td>
            <td rowspan="2">13:00</td>
        </tr>
        <tr>
            <td rowspan="2">Carpentry for beginners</td>
        </tr>
        <tr>
            <td>13:30</td>
            <td>17:00</td>
        </tr>
        <tr>
            <td>Wednesday</td>
            <td>08:00</td>
            <td>17:00</td>
            <td>Joinery Class</td>
        </tr>
    </tbody>
</table>
