<script>
$(document).ready(function() {

    var int = setInterval(fixCount, 50);  // 50ms周期检测函数
    var countOffset = 20000;  // 初始化首次数据

    function fixCount() {            
       if (document.getElementById("busuanzi_container_site_pv").style.display != "none")
        {
            $("#busuanzi_value_site_pv").html(parseInt($("#busuanzi_value_site_pv").html()) + countOffset); 
            clearInterval(int);
        }                  
        if ($("#busuanzi_container_site_pv").css("display") != "none")
        {
            $("#busuanzi_value_site_uv").html(parseInt($("#busuanzi_value_site_uv").html()) + countOffset); // 加上初始数据 
            clearInterval(int); // 停止检测
        }  
    }
