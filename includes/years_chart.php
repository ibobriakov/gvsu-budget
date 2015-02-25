<style type="text/css">
    #years-chart, #sum-years-chart svg {
      height: 400px;
  }
</style>

<div class="container">
    <div class="row-fluid">
        <div>
	<h4 class="text-right" style="margin-right: 15vh;"><i>Hint: for seeing in %, use "Expanded" view.</i></h4>
            <h3>All Michigan Public Universities — Data 1977-2013</h3>
            <div style="margin-bottom: 1em;">
            <span style="margin-right: 8%;">
                <strong>Universities:</strong>
            </span>
            <div id="university-selector2" data-toggle="buttons" class="col-sm-11 btn-group" role="group" aria-label="...">
            </div>
            </div>
            <div id="year-selector" data-toggle="buttons" class="col-sm-12 btn-group btn-group-justified" role="group" aria-label="...">
            </div>
            <div id="years-chart">
                <svg></svg>
            </div>
        </div>
        <div>
            <h3>All Michigan Public Universities — Data 1977-2013 (Summary)</h3>
            <div id="sum-years-selector" data-toggle="buttons" class="btn-group btn-group-justified" role="group" aria-label="...">
            </div>
            <div id="sum-years-chart">
                <svg></svg>
            </div>
        </div>
    </div>
</div>
