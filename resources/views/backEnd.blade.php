<!doctype html>
<html lang="en" >
<head>
    
    <meta charset="utf-8" />
    <title>Demo Project</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="Premium Multipurpose Admin & Dashboard Template" name="description" />
    <meta content="Themesbrand" name="author" />
    <!-- App favicon -->
    <link rel="shortcut icon" href="{{ asset('')}}assets/img/favicon.ico" type="image/x-icon" >
    <!-- Bootstrap Css -->
    <link href="{{ asset('')}}assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
    <!-- Icons Css -->
    <link href="{{ asset('')}}assets/css/icons.min.css" rel="stylesheet" type="text/css" />
    <!-- App Css-->
    <link href="{{ asset('')}}assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
    <link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro-v6@44659d9/css/all.min.css" rel="stylesheet" type="text/css" />
    {{-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" type="text/css"> --}}
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/spectrum-colorpicker2/dist/spectrum.min.css">
    <style>
        .vs__search{opacity: 0.6!important;}
        .sp-colorize-container{ width:10%!important;}
        .modal-backdrop{width: 100%;height: 100%;}
    </style>

</head>

<body class="font-ar" >
    
    <div id="app"></div>
    
    <!-- Right bar overlay-->
    <div class="rightbar-overlay"></div>
    
    <!-- JAVASCRIPT -->
    <script src="{{ asset('')}}assets/libs/jquery/jquery.min.js"></script>
    <script src="{{ asset('')}}assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="{{ asset('')}}assets/libs/metismenu/metisMenu.min.js"></script>
    <script src="{{ asset('')}}assets/libs/simplebar/simplebar.min.js"></script>
    <script src="{{ asset('')}}assets/libs/node-waves/waves.min.js"></script>
    <script src="{{ asset('')}}assets/libs/waypoints/lib/jquery.waypoints.min.js"></script>
    <script src="{{ asset('')}}assets/libs/jquery.counterup/jquery.counterup.min.js"></script>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bluebird/3.3.5/bluebird.min.js"></script>
    
    <script src="https://cdn.jsdelivr.net/npm/spectrum-colorpicker2/dist/spectrum.min.js"></script>
    <script src="{{ asset('js/app.js?v1')}}"></script>                
    <script src="{{ asset('')}}assets/libs/jquery-steps/build/jquery.steps.min.js"></script>
    <script src="{{ asset('')}}assets/js/pages/form-wizard.init.js"></script>
    
    <script>
        $(document).on('click','.link-page', function () { $("body").removeClass("sidebar-enable") });
    </script>
    
</body>

</html>
