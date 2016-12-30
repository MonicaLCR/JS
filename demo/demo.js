<script type="text/javascript">
function GetSelectedItem() {
var chosen = ""
len = document.f1.r1.length
  for (i = 0; i <len; i++) {
    if (document.f1.r1[i].checked) {
chosen = document.f1.r1[i].value
    }
  }
}
return chosen
</script>
