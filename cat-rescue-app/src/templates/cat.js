import React from "react"
import { graphql } from "gatsby"
// import Layout from "../components/layout"

export default function CatTemplate({ data }) {
  const cat = data.sanityCat
  console.log('<<<<<', cat);
  
  return (

      <div>
        <h1>{cat.title}</h1>
        <h2>{cat.location.city}</h2>
        
      </div>
  
  )
}

export const query = graphql`
  query($slug: String!) {
    sanityCat(slug: {current: {eq: $slug}}) {
        id
        title
        location {
          city
        }
    }
  }
`
