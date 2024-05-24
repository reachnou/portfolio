import ScrollAnimation from "react-animate-on-scroll";
import { ContactWrapper } from "../About/AboutElements";

function Blog() {
    return (
        <ContactWrapper id="blogs">
            <div className="Container">
                <div className="SectionTitle">Blogs</div>
                <ScrollAnimation animateIn="fadeIn" >
                    <div className="BigCard">
                        <ScrollAnimation animateIn="fadeInLeft">
                            <div class="card">
                                <img src="https://zandersgroup.com/app/uploads/2023/05/Blockchain-and-Defi.-shubham-dhage-JlijbOtSWuw-unsplash-1-3840x2160.jpg" class="card-img" alt="Blockchain" />
                                <div class="card-img-overlay p-0">
                                    <div className="p-3">
                                        <p class="card-title fs-1 fw-bold mb-2 text-white">Blockchain</p>
                                        <p class="card-text fs-5 text-white">In this article we will setup Fabric network with Docker from scratch.</p>
                                        <a href="https://successful-amount-b51.notion.site/Hyperledger-dde145192cbd4243be28f82e8f839e93?pvs=4" target="_blank" class="btn btn-primary">Read Now</a>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <br /><br />
                        <ScrollAnimation animateIn="fadeInLeft">
                            <div class="card">
                                <img src="https://cdn.analyticsvidhya.com/wp-content/uploads/2020/09/72142deep-learning-vs-machine-learning-t.jpg" class="card-img" alt="Machine Learning" />
                                <div class="card-img-overlay p-0">
                                    <div className="p-3">
                                        <p class="card-title fs-1 fw-bold mb-2 text-white">Machine Learning</p>
                                        <p class="card-text fs-5 text-white">Despite its rise in popularity in the last years, Machine Learning is not a new tool. It has been around for centuries, at least theoretically.</p>
                                        <a href="https://successful-amount-b51.notion.site/Machine-Learning-424c66aab8fb4ad8ab21bf4e3ff50a73?pvs=4" target="_blank" class="btn btn-primary">Read Now</a>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <br /><br />
                        <ScrollAnimation animateIn="fadeInLeft">
                            <div class="card">
                                <img src="https://rawgit.com/quangv/awesome-couchdb/master/logo--couch.png" class="card-img" alt="CouchDB" />
                                <div class="card-img-overlay p-0">
                                    <div className="p-3">
                                        <p class="card-title fs-1 fw-bold mb-2">Apache CouchDB</p>
                                        <p class="card-text fs-5">Apache CouchDB is an open source database developed by Apache software foundation. The focus is on the ease of use, embracing the web.</p>
                                        <a href="https://successful-amount-b51.notion.site/Apache-CouchDB-5476c7f4a2cf4f1abd903a8e91814b90?pvs=4" target="_blank" class="btn btn-primary">Read Now</a>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </ScrollAnimation>
            </div>
        </ContactWrapper>
    );
}

export default Blog;