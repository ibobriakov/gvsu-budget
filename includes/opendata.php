<section id="avb-opendata" style="padding:10px;">
    <div class="separator" style="margin-bottom:20px;">
        <div class="title-head">
            Data
        </div>

        <?php
            foreach($dataSections as $section){
                echo '<div class="dataDownload">';
                echo '<span><i class="icon-download"></i></span>';
                echo '<span class="name">'.ucfirst($section).'</span> <span>-</span>';
                echo '<a href="/data/'.$section.'.csv">CSV</a> <span>-</span>';
                echo '<a href="/data/'.$section.'.json">Json</a>';
                echo '</div>';
            }
        ?>

    </div>

    <div class="separator" style="margin-bottom:20px;">
        <div class="title-head">
            Code
        </div>

    </div>

    <div>
        <div>
            <?php echo $siteName; ?> is licensed under <a class="link" href=
            "http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2</a>
            and was created using open source code and data.
        </div>

        <div>
            Download, examine, and contribute to <?php echo $siteName; ?>
            using the links provided.
        </div>
    </div>
</section>
