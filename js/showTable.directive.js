myApp.directive("showtable",function(){

    return {
        
        template: `<div id="divTable" >
        <table class="table table-condensed">
            <thead>
                    <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Body</th>
                    </tr>
            </thead>
            <tbody>
                    <tr ng-repeat="item in items | filter:search ">
                            <td>{{item.id}}</td>
                            <td>{{item.title}}</td>
                            <td>{{item.body}}</td>
                    </tr>
            </tbody>
            
        </table>  
        
    </div>`
    }
});