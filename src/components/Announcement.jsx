import styled from "styled-components"

const Container = styled.div`
 height: 30px;
 background-color: teal;
 color: white;
 font-weight: 500;
 display: flex;
 justify-content: center;
 align-items: center;
`

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over &#8377;1000.
    </Container>
  )
}

export default Announcement