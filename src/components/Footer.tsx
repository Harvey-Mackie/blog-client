import * as React from 'react'

export interface IFooterProps {}

export default function Footer (props: IFooterProps) {
  return (
    <div>
      <div>
        <div>
          <h1>Subscribe to Weekly Snippets</h1>
          <p>
            Join a new community who are looking to improve in all areas of
            life. I share actionable advise, tips, learnings and advise directly
            to your inbox once per week.
          </p>
        </div>
        <div>
          <input type='text' name='firstName' placeholder='First Name' />
          <input type='email' name='email' placeholder='Email Address' />
          <button type='button'>Subscribe</button>
        </div>
      </div>
      <div style={{ backgroundColor: 'black', color: 'white' }}>
        <p>TRADEMARK</p>
        <p>SOCIAL MEDIA LINKS</p>
      </div>
    </div>
  )
}
