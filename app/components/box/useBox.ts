import { useEffect } from 'react'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'

export const useBox = (boxRef: any) => {
	useEffect(() => {
		const scene = new THREE.Scene()

		const geometry = new THREE.SphereGeometry(3, 64, 64)
		const material = new THREE.MeshStandardMaterial({
			color: 'rgb(139, 92, 246)',
		})

		//sizes
		const sizes = {
			width:
				(boxRef.current && boxRef?.current?.getBoundingClientRect().height) ||
				0,

			height:
				(boxRef.current && boxRef?.current.getBoundingClientRect().width) || 0,
		}

		const mesh = new THREE.Mesh(geometry, material)
		scene.add(mesh)

		//light
		const light = new THREE.PointLight(0xffffff, 1, 100)
		light.position.set(0, 10, 10)
		scene.add(light)

		//camera
		const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)
		camera.position.z = 10
		scene.add(camera)

		if (process.browser) {
			const canvas = document.querySelector('.webgl') || undefined

			//render
			const rendered = new THREE.WebGL1Renderer({ canvas })
			rendered.setSize(sizes.width, sizes.height)
			rendered.setPixelRatio(2)
			rendered.setClearColor(0x000000, 0)
			rendered.render(scene, camera)

			//controls
			const controls = new (OrbitControls as any)(camera, canvas)
			controls.enabledDamping = true
			controls.enabledPan = true
			controls.enabledZoom = false
			controls.autoRotate = true
			controls.autoRotateSpeed = 5

			window.addEventListener('resize', () => {
				sizes.width
				sizes.height

				camera.aspect = sizes.width / sizes.height
				rendered.setSize(sizes.width, sizes.height)
			})

			const loop = () => {
				controls.update()
				rendered.render(scene, camera)
				window.requestAnimationFrame(loop)
			}
			loop()
		}
	}, [boxRef])
}
