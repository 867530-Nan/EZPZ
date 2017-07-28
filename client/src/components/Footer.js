import React, { Component } from 'react'
import { Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'


class Footer extends Component {
  render() {
    return(
<div>
			<div className="entireFooter">

			  <div className="navCopy">
			  	<div className="buttLinks" as="h3"><a target="_blank" className="buttNav" href="/">Home</a></div>
			  	<span>|</span>
			  	<div className="buttLinks" as="h3"><a target="_blank" className="buttNav" href="/aboutus">About</a></div>
			  	<span>|</span>
			  	<div className="buttLinks" as="h3"><a target="_blank" className="buttNav" href="/contact">Contact</a></div>
			  	<span>|</span>
			  	<div className="buttLinks" as="h3"><a target="_blank" className="buttNav" href="https://encouragingparenting.wordpress.com/">Blog</a></div>
			  	<span>|</span>
			  	<div className="buttLinks" as="h3"><a target="_blank" className="buttNav" href="http://www.goldmansachs.com/careers/">Careers</a></div>
			  </div>

				<div as="h5" className="slogan">Encouraging Parenting &nbsp; :: &nbsp; Eliminating Planning &nbsp;</div>
				<div className="sloganTwo">&#123; EZPZ &#125; </div>

				<div as="h5"><a className="bottomMailTo" href="mailto:community.ezpz@gmail.com" target="_top">We'd love to hear from You - Feedback, Comments, Testimonials</a></div>

				<div className="socialButtons">
			    <Button className="buttbutt" target="_blank" circular color='facebook' icon='facebook' href="https://www.facebook.com/UnitedWay/"/>
			    <Button className="buttbutt" target="_blank" circular color='twitter' icon='twitter' href="https://twitter.com/BBBSA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" />
			    <Button className="buttbutt" target="_blank" circular icon='github' href="https://github.com/kevinspaceyfrankunderwood/EZPZ"/>
			    <Button className="buttbutt" target="_blank" circular color='linkedin' icon='linkedin' href="https://www.linkedin.com/in/artflater"/>
			    <Button className="buttbutt" target="_blank" circular color='google plus' icon='google plus' href="https://plus.google.com/communities/103578411667896012518" />
			  </div>

			</div>
</div>
    );
  }
}

export default Footer;
