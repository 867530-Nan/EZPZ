import React, { Component } from 'react'
import { Divider, Grid, Card, Icon, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'


class Footer extends Component {
  render() {
    return(
<div>
			<div className="entireFooter">
				<div className="socialButtons">
			    <Button className="buttbutt" circular color='facebook' icon='facebook' href="https://www.facebook.com/UnitedWay/"/>
			    <Button className="buttbutt" circular color='twitter' icon='twitter' href="https://twitter.com/BBBSA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" />
			    <Button className="buttbutt" circular color='linkedin' icon='linkedin' href="https://www.linkedin.com/in/artflater"/>
			    <Button className="buttbutt" circular color='google plus' icon='google plus' href="https://plus.google.com/communities/103578411667896012518" />
			  </div>

			  <div className="navCopy">
			  	<div className="buttLinks" as="h3"><a className="buttNav" href="/">Home</a></div>
			  	<span>|</span>
			  	<div className="buttLinks" as="h3"><a className="buttNav" href="/aboutus">About</a></div>
			  	<span>|</span>
			  	<div className="buttLinks" as="h3"><a className="buttNav" href="/contact">Contact</a></div>
			  	<span>|</span>
			  	<div className="buttLinks" as="h3"><a className="buttNav" href="http://lifewithmunchers.com/">Blog</a></div>
			  	<span>|</span>
			  	<div className="buttLinks" as="h3"><a className="buttNav" href="http://www.goldmansachs.com/careers/">Careers</a></div>
			  </div>

				<div as="h5" className="slogan">Encouraging Parenting, Eliminating Planning: EZPZ</div>
			</div>
</div>
    );
  }
}

export default Footer;
