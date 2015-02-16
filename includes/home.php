<div id="overlay"></div>

<div id="avb-home">
    <div class="container">
        <div class="hero-unit">
            <div id="welcome-hero">
                <h1>See your budget.</h1>

                <div class="home-column" id="home-col1" style=
                "display:inline-block;">
                    <p>Government budgets can be tough to understand, but now the <?php echo $longName; ?>, <?php echo $state; ?> is providing the next generation of accessibility in financial information that allows citizens to view, engage with, and discuss.</p>
                </div>

                <div class="home-column text-center" id="home-col2" style=
                "display:inline-block; margin-left:auto;">
                    <p style="margin-top:20px;"><a class="link" href=
                    "javascript:;" onclick="avb.home.hide(true);" style=
                    "text-decoration:underline;">Start the tour</a>
                    </p>
                    <p style="margin-top:20px;">or</p>
                    <p style="margin-top:20px;"><a class="link" href="javascript:;" onclick=
                    "avb.home.hide();" style=
                    "text-decoration:underline;">Click here to explore</a></p>
                </div>
            </div>

            <div id="home-col3">
                <div id="home-map-svg">
                    <div>
                        <div style="position: relative;height: 200px;">
                            <div class="node" data-section="revenues"
                            style="left: 0px; width: 100px;">
                                <div>
                                    Revenues
                                </div>

                                <div class="node-bar" id="revenues-node"
                                style=
                                " background-color: rgb(31, 119, 180);">
                                    <div class="node-value">
                                        11
                                    </div>
                                </div>
                            </div>

                            <div class="node" data-section="expenses"
                            style="left: 100px; width: 100px;">
                                <div>
                                    Expenses
                                </div>

                                <div class="node-bar" id="expenses-node"
                                style=" background-color: #56b356;">
                                    <div class="node-value">
                                        11
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
