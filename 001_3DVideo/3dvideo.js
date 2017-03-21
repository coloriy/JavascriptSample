window.onload = function() {
    var URL = window.URL || window.webkitURL;

    var video = document.createElement("video");
    video.width = 320;
    video.height = 240;

    var width = 800;
    var height = 600;
    var fov = 45;
    var near = 0.1;
    var far = 10000;

    var renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    var camera = new THREE.PerspectiveCamera(fov, width / height, near, far);
    var scene = new THREE.Scene();
    scene.add(camera);
    camera.position.z = 500;
    renderer.setSize(width, height);
    document.getElementById("webgl").appendChild(renderer.domElement);
    var light = new THREE.AmbientLight(0xffffff);
    scene.add(light);
    var texture = new THREE.Texture(video);
    var material = new THREE.MeshLambertMaterial({
        map: texture,
        side: THREE.DoubleSide
    });
    var plane = new THREE.Mesh(new THREE.PlaneGeometry(320, 240), material);
    scene.add(plane);
    //var sphere = new THREE.Mesh(new THREE.SphereGeometry(300, 200, 200), material);  
      //sphere.overdraw = true;  
      //scene.add(sphere); 
    
    var trackball = new THREE.TrackballControls(camera, renderer.domElement);
    function render() {
        if (video.readyState == video.HAVE_ENOUGH_DATA) {
            texture.needsUpdate = true;
        }
        renderer.clear();
        renderer.render(scene, camera);
    }
    function animate() {
        trackball.update();
        render();
        requestAnimationFrame(animate);
    }
    animate();
    var file = document.getElementById("file");
    var old_url;
    document.getElementById("submit").onclick = function() {
        if (file.files.length) {
            if (old_url) {
                URL.revokeObjectURL(old_url);
            }
            old_url = URL.createObjectURL(file.files[0]);
            video.src = old_url;
            video.load();
            video.play();
        }
    };
    document.getElementById("play").onclick = function() {
        video.play();
    };
    document.getElementById("pause").onclick = function() {
        video.pause();
    };
}
