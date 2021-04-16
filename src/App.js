
import './App.css';
import {Header,Button,HeadingsFlex,JobOffersContainer,OfferHeading,ViewOffers,OfferBlock,Position,DatePosted,Location,LocationB,About,SmallBlock,
  
  CircleContainer,Company, FeaturedHeading, Circle,CompaniesFlex, OffersFlex,CompaniesContainer,  JobOffersContainerInnerContainer, HeaderInnerContainer,SubHeading,Heading} from "./style"
  import {HiChevronRight} from "react-icons/hi"
  import {data} from "./data"
  import {BiBriefcaseAlt} from "react-icons/bi"
  import {companies} from "./data"

const  App=()=> {
  return (
    <>
    <Header>
      <HeaderInnerContainer>
      <Heading>Juniors make IT work.</Heading>
      <SubHeading>Hire and invest in highly skilled juniors now.</SubHeading>
      <Button>Post Offer Now</Button>
      </HeaderInnerContainer>
     
    </Header>
    <JobOffersContainer>
        <JobOffersContainerInnerContainer>
        <HeadingsFlex>
        <OfferHeading>Newest Job Offers</OfferHeading>
        <ViewOffers>View all job offers ➜</ViewOffers>
        </HeadingsFlex>
        <OffersFlex>
       {data?.map(item=> <OfferBlock>
          <HeadingsFlex style={{marginBottom:"0px"}}>
          <Position>{item.position}</Position>
          <DatePosted>{item.DatePosted}</DatePosted>
          </HeadingsFlex>
          <Location>{item.location}</Location>
          <LocationB>{item.locationB}</LocationB>
          <About>{item.about}</About>
          <SmallBlock><HiChevronRight style={{marginLeft:"1px"}} size="2rem" color="#fff"></HiChevronRight></SmallBlock>
        </OfferBlock>)}
        </OffersFlex>
        <CompaniesContainer>
        <FeaturedHeading>Featured Companies</FeaturedHeading>
        <CompaniesFlex>

          {companies?.map(node=> <CircleContainer>
        <Circle><BiBriefcaseAlt color="grey" size="2rem"/></Circle>
        <Company>{node}</Company>


        </CircleContainer>)}
         

        </CompaniesFlex>

        </CompaniesContainer>

       
        </JobOffersContainerInnerContainer>
      </JobOffersContainer>
    </>
  );
}

export default App;
