import React, { Component } from 'react'
import { Divider, Grid, Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'


class Footer extends Component {
  render() {
    return(
<div>
			<div className="entireFooter">
				<div className="socialButtons">
			    <Button circular color='facebook' icon='facebook' href="https://www.facebook.com/UnitedWay/"/>
			    <Button circular color='twitter' icon='twitter' href="https://twitter.com/BBBSA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" />
			    <Button circular color='linkedin' icon='linkedin' href="https://www.linkedin.com/in/artflater"/>
			    <Button circular color='google plus' icon='google plus' href="https://plus.google.com/communities/103578411667896012518" />
			  </div>
			  <div className="navCopy">
			  	<div as="h3" href="/">Home</div>
			  	<div as="h3" href="/aboutus">About</div>
			  	<div as="h3" href="/contact">Contact</div>
			  	<div as="h3" href="http://lifewithmunchers.com/">Blog</div>
			  	<div as="h3" href="http://www.goldmansachs.com/careers/">Careers</div>
			  <div>
			  <div>
			 		<a href="http://example.com/page.html#foo"><Icon className="angle double up" /></a>
			  </div>
			  <div as="h5" className="slogan">Encouraging Parenting, Eliminating Planning: EZPZ</div>
			<div>
</div>
    );
  }
}

export default Footer;
