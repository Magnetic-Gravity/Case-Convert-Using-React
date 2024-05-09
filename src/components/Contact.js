import React from 'react'

export default function Contact() {
  return (
    <>
    <div data-mdb-input-init class="form-outline">
      <li>
        <input type="number" id="typeNumber" class="form-control" />
        <label class="form-label" for="typeNumber">First name</label>
      </li>
      <li>
        <input type="number" id="typeNumber" class="form-control" />
        <label class="form-label" for="typeNumber">Surname</label>
      </li>
      <li>
        <input type="number" id="typeNumber" class="form-control" />
        <label class="form-label" for="typeNumber">Phone Number</label>
      </li>
      
    </div>
    </>
  )
}
