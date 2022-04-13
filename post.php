<?php

if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];

    if($name == ""){
        echo json_encode(["status"=>false,"msg"=>"Fill in a name"]);exit;
    }
    if($email == ""){
        echo json_encode(["status"=>false,"msg"=>"Fill in a email"]);exit;
    }
    if($tel == ""){
        echo json_encode(["status"=>false,"msg"=>"Fill in a telephone"]);exit;
    }

    echo json_encode($_POST);exit;
}