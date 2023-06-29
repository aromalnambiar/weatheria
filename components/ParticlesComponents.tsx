'use client'

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import ParticleConfig from "@/components/particlesjs-config.json"
import { global } from "styled-jsx/css";

const ParticlesComponents = () => {

     const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (

        <div>
            <Particles
                        id="tsparticles"
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={
                           {
                                interactivity: {
                                    events: {
                                        onhover: {
                                            enable: true,
                                            mode: "repulse"
                                          },
                                        onClick: {
                                            enable: true,
                                            mode: "push",
                                        },
                                        onHover: {
                                            enable: true,
                                            mode: "repulse",
                                        },
                                        resize: true,
                                    },
                                    modes: {
                                        repulse: {
                                            distance: 200,
                                            duration: 0.4
                                          },
                                          push: {
                                            particles_nb: 4
                                          },
                                          grab: {
                                            distance: 400,
                                            line_linked: {
                                              opacity: 1
                                            }
                                          },
                                          bubble: {
                                            distance: 400,
                                            size: 40,
                                            duration: 2,
                                            opacity: 8,
                                            speed: 3
                                          },
                                          remove: {
                                            particles_nb: 2
                                          }
                                    },
                                },
                                particles: {
                                    color: {
                                        value: "#ff8c00"
                                      },
                                    links: {
                                        color: "#ffffff",
                                        distance: 150,
                                        enable: true,
                                        opacity: 0.5,
                                        width: 1,
                                    },
                                    collisions: {
                                        enable: true,
                                    },

                                    move: {
                                        enable: true,
                                        speed: 3,
                                        direction: "none",
                                        random: false,
                                        straight: false,
                                        out_mode: "out",
                                        bounce: false,
                                        attract: {
                                          enable: false,
                                          rotateX: 600,
                                          rotateY: 1200
                                        }
                                      },

                                    number: {
                                        value: 60,
                                        density: {
                                          enable: true,
                                          value_area: 3527.50653390415
                                        }
                                      },

                                   opacity: {
                                        value: 0.8,
                                        random: false,
                                        anim: {
                                            enable: false,
                                            speed: 1,
                                            opacity_min: 0.1,
                                            sync: false
                                        }
                                        },

                                    shape: {
                                        type: "circle",
                                        stroke: {
                                          width: 0,
                                          color: "#000000"
                                        },
                                        polygon: {
                                          nb_sides: 5
                                        },
                                        image: {
                                          src: "img/github.svg",
                                          width: 100,
                                          height: 100
                                        }
                                      },

                                      size: {
                                        value: 30,
                                        random: true,
                                        anim: {
                                          enable: false,
                                          speed: 40,
                                          size_min: 0.1,
                                          sync: false
                                        }
                                      },

                                      line_linked: {
                                        enable: true,
                                        distance: 0,
                                        color: "#ffffff",
                                        opacity: 0.5932624625202434,
                                        width: 1
                                      },

                                      
                                },
                                detectRetina: true,
                            } 
                        }
                    />
        </div>
        
    );
};


export default ParticlesComponents;